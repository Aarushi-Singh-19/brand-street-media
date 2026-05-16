function showStep(stepNumber){
    const tabs = document.querySelectorAll(".process-tab");
    const contents = document.querySelectorAll(".process-content");

    tabs.forEach(function(tab){
        tab.classList.remove("active");
    });

    contents.forEach(function(content){
        content.classList.remove("active");
    });

    tabs[stepNumber - 1].classList.add("active");

    const selectedStep = document.getElementById("step-" + stepNumber);
    selectedStep.classList.add("active");
}