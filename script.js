// HERO SECTION'S TRAILER PART

player = document.getElementById("video")
btnPlayPause = document.getElementById("play")

function changeButtonType(btn, value) {
    btn.title = value;
    btn.innerHTML = value;
}

player.addEventListener("play", function () {
    changeButtonType(btnPlayPause, "Pause Trailer");
}, false)

player.addEventListener("pause", function () {
    changeButtonType(btnPlayPause, "Resume Trailer");
}, false)

btnPlayPause.addEventListener("click", () => {
    if (player.paused || player.ended) {
        player.play()
    } 
    else {
        player.pause()
    }
})

// It is My List Button on hero section
var myList = document.querySelector("#myList")
myList.addEventListener("click", () => {
    if (myList.innerHTML != "✓ In My List") {
        myList.innerHTML = "✓ In My List"
    } else {
        myList.innerHTML = "+ My List"
    }
})



document.querySelectorAll(".progress-bar").forEach(calculateProgressBar)

// There are 2 handles. It just didn't work when i tried to do it with one click function
// And I decided to make like this
document.addEventListener("click", e => {
    let handle
    if (e.target.matches("#handle")) {
        handle = e.target
    } else {
        handle = e.target.closest("#handle")
    }
    if (handle != null) {
        onHandleClick(handle)
    }
})


// It is the function that moves the carousel
function onHandleClick(handle) {
    const progressBar = handle.closest(".container").querySelector(".progress-bar")
    const box = handle.closest(".container").querySelector(".boxes")
    const sliderIndex = parseInt(getComputedStyle(box).getPropertyValue("--slider-index"))
    const progressBarItemCount = progressBar.children.length

    if (handle.classList.contains("left-handle")) {
        if (sliderIndex - 1 < 0) {
            box.style.setProperty("--slider-index", progressBarItemCount - 1)
            progressBar.children[sliderIndex].classList.remove("active")
            progressBar.children[progressBarItemCount - 1].classList.add("active")
        } else {
            box.style.setProperty("--slider-index", sliderIndex - 1)
            progressBar.children[sliderIndex].classList.remove("active")
            progressBar.children[sliderIndex - 1].classList.add("active")
        }
    }

    if (handle.classList.contains("right-handle")) {
        if (sliderIndex + 1 >= progressBarItemCount) {
            box.style.setProperty("--slider-index", 0)
            progressBar.children[sliderIndex].classList.remove("active")
            progressBar.children[0].classList.add("active")
        } else {
            box.style.setProperty("--slider-index", sliderIndex + 1)
            progressBar.children[sliderIndex].classList.remove("active")
            progressBar.children[sliderIndex + 1].classList.add("active")
        }
    }
}


// It calculates the progress bar
function calculateProgressBar(progressBar) {
    progressBar.innerHTML = ""
    const slider = progressBar.closest(".container").querySelector(".boxes")
    const itemCount = slider.children.length
    const itemsPerScreen = parseInt(getComputedStyle(slider).getPropertyValue("--items-per-screen"))
    const progressBarItemCount = Math.ceil(itemCount / itemsPerScreen)
    const sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue("--slider-index"))

    for (let i = 0; i < progressBarItemCount; i++) {
        const barItem = document.createElement("div")
        barItem.classList.add("progress-item")
        if (i === sliderIndex) {
            barItem.classList.add("active")
        }
        progressBar.append(barItem)
    }
}


// When you hover It starts the trailer. 
boxPlayer = document.getElementById("box-video")

boxPlayer.onmouseover = function () {
    if (boxPlayer.paused || boxPlayer.ended) {
        boxPlayer.play()
    }     
}

boxPlayer.onmouseout = function () {
        boxPlayer.pause()
}