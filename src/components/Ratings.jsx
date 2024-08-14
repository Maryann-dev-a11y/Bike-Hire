function Ratings () {
    function rate (n) {
        remove()
        for (let i = 0; i < n; i++) {
            if (n == 1) cls = "one";
            else if (n == 2) cls = "two"
            else if (n == 3) cls = "three"
            else if (n == 4) cls = "four"
            else if (n == 5) cls = "five"
            stars[i].className = "star" + cls
    }
    output.innerText = "Rating is:" 
    }
    return (
        <div class name="ratings">
            <h1>Star ratings</h1>
            <br />
            <span onClick={rate}></span>
        </div>
    )
}