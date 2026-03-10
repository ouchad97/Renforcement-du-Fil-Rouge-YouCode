// web/assets/js/progress.js

const StorageKey = "youcode_fil_rouge_progress";

// Data Structure:
// {
//    totalTasks: 0,
//    completedTasks: 0,
//    tasks: { "filepath-hash-index": boolean }
// }

let progressData = {
    totalTasks: 0,
    completedTasks: 0,
    tasks: {}
};

export function initProgress() {
    const saved = localStorage.getItem(StorageKey);
    if (saved) {
        try {
            progressData = JSON.parse(saved);
        } catch(e) {
            console.error("Erreur de parsing des progrès", e);
        }
    }
    updateUI();
}

/**
 * Searches the rendered Markdown container for lists that look like tasks/exercises
 * and replaces them with interactive checkboxes tied to the current file path.
 */
export function injectProgressCheckboxes(container, sourceFilePath) {
    const lists = container.querySelectorAll('li');
    let taskIndex = 0;
    
    lists.forEach(li => {
        // We look for specifically marked items or generic tasks
        // Since we parsed with Marked, if it had [ ] or [x], the HTML might have standard checkboxes, we rely on the replacer in app.js
        const checkbox = li.querySelector('input[type="checkbox"]');
        
        if (checkbox) {
            const taskId = `${sourceFilePath}-${taskIndex++}`;
            checkbox.setAttribute('data-task-id', taskId);
            
            // Check state
            if (progressData.tasks[taskId] === true) {
                checkbox.checked = true;
                li.classList.add('text-brand-600', 'line-through', 'opacity-80');
            } else if (progressData.tasks[taskId] === false) {
                 checkbox.checked = false;
                 li.classList.remove('text-brand-600', 'line-through', 'opacity-80');
            }
            // If never registered, we register it
            else {
                 progressData.tasks[taskId] = checkbox.checked;
                 if (checkbox.checked) progressData.completedTasks++;
            }
        }
    });

    // Recalculate totals globally on page load
    recalculateTotals();
    saveProgress();
    updateUI();
}

/**
 * Called when a user clicks a checkbox
 */
export function updateModuleProgress(checkbox) {
    const taskId = checkbox.getAttribute('data-task-id');
    const isChecked = checkbox.checked;
    
    progressData.tasks[taskId] = isChecked;
    
    const li = checkbox.closest('li');
    if (isChecked) {
        li.classList.add('text-brand-600', 'line-through', 'opacity-80');
        // Add a tiny ping animation to the badge to show progression
        const ping = document.getElementById('badge-ping');
        if(ping) {
            ping.classList.remove('hidden');
            setTimeout(() => ping.classList.add('hidden'), 1000);
        }
    } else {
        li.classList.remove('text-brand-600', 'line-through', 'opacity-80');
    }
    
    recalculateTotals();
    saveProgress();
    updateUI();
}

function recalculateTotals() {
    progressData.totalTasks = Object.keys(progressData.tasks).length;
    progressData.completedTasks = Object.values(progressData.tasks).filter(v => v === true).length;
}

function saveProgress() {
    localStorage.setItem(StorageKey, JSON.stringify(progressData));
}

function updateUI() {
    const { totalTasks, completedTasks } = progressData;
    
    let percentage = 0;
    if (totalTasks > 0) {
        percentage = Math.round((completedTasks / totalTasks) * 100);
    }

    const barFill = document.getElementById('progress-bar-fill');
    const percentText = document.getElementById('progress-percentage');
    
    if (barFill && percentText) {
        barFill.style.width = `${percentage}%`;
        percentText.textContent = `${percentage}%`;
        
        // Change color based on completion
        if (percentage === 100) {
            barFill.className = "h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-700 ease-out";
            percentText.classList.replace('text-gray-700', 'text-emerald-600');
        } else {
            barFill.className = "h-full bg-gradient-to-r from-brand-500 to-blue-500 rounded-full transition-all duration-700 ease-out";
            percentText.classList.replace('text-emerald-600', 'text-gray-700');
        }
    }

    updateBadge(percentage, completedTasks);
}

function updateBadge(percentage, completed) {
    const badgeText = document.getElementById('badge-text');
    const badgeContainer = document.getElementById('user-badge');
    const badgeDot = document.getElementById('badge-dot');

    if (!badgeText || !badgeContainer) return;

    let levelTitle = "Débutant";
    let colorClass = "text-gray-600 ring-gray-200 bg-gray-50";
    let dotClass = "bg-gray-400";
    
    if (completed === 0) {
        levelTitle = "Novice";
    } else if (percentage < 33) {
        levelTitle = "Apprenti";
        colorClass = "text-brand-700 ring-brand-200 bg-brand-50";
        dotClass = "bg-brand-500";
    } else if (percentage < 66) {
        levelTitle = "Intermédiaire";
        colorClass = "text-blue-700 ring-blue-200 bg-blue-50";
        dotClass = "bg-blue-500";
    } else if (percentage < 100) {
        levelTitle = "Avancé";
        colorClass = "text-purple-700 ring-purple-200 bg-purple-50";
        dotClass = "bg-purple-500";
    } else {
        levelTitle = "Expert 🏆";
        colorClass = "text-yellow-700 ring-yellow-300 bg-gradient-to-r from-yellow-50 to-amber-50 border-0";
        dotClass = "bg-yellow-500";
    }

    badgeText.textContent = levelTitle;
    badgeContainer.className = `px-3 py-1.5 rounded-lg text-xs font-bold ring-1 ring-inset shadow-sm flex items-center gap-1.5 cursor-crosshair group transition-all duration-500 ${colorClass}`;
    badgeDot.className = `relative inline-flex rounded-full h-2 w-2 ${dotClass}`;
}
