$("#add-task").click(function () {
var taskInput = $("#task-input").val();

if (taskInput) {
    var taskItem = `
        <div class="task-item">
            <span>
            ${taskInput}
            </span>
            <span class="delete-icon">🗑️</span>
        </div>
        `;
    $(".task-list").append(taskItem);
    $("#task-input").val("");
}
});


$(".task-list").on("click", ".delete-icon", function () {
$(this).parent().remove();
});
