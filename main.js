/* Toggle all checkboxes */
function toggleAll(src) {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = src.checked
        var image = document.getElementById(checkboxes[i].value);
        if (image) {
            image.style.visibility = src.checked ? 'visible' : 'hidden';
        }
    }
}

/* Toggle individual checkbox */
function toggle(src, evt) {
    var state = "hidden";
    if (src.checked) {
        state = "visible";
    }
    document.getElementById(evt).style.visibility = state;
    setMasterToggle(src.checked);
}

/* Check state of top level toggle */
function setMasterToggle(state) {
    var master = document.getElementById("masterToggle");
    if (state) {
        master.checked = true;
    } else {
        var disableFlag = false;
        var checkboxes = document.querySelectorAll('input[type="checkbox"]');
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked && checkboxes[i].id != "masterToggle") {
                disableFlag = true;
            }
        }
        master.checked = disableFlag;
    }
}
