// BUDGET CONTROLLER
var budgetController = (function () {



})();

//UI CONTROLLER
var UIController = (function () {
    return {
        getInput: function () {
            return {
                type: document.querySelector('.add__type').value,
                description: document.querySelector('.add__description').value,
                value: document.querySelector('.add__value').value
            };
        }
    };
})();

//GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {
    var ctrlAddItem = function () {

        // Get the field input data
        var input = UICtrl.getInput();
        // Add the item to the budget controller

        // Add the item to the UI

        // Calculate the budget

        // Display the budget on the UI

    };
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (event) {
        if (event.keyCode === 13) {
            ctrlAddItem();
        }
    })
})();