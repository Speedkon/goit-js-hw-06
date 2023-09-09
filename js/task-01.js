let list = document.querySelectorAll('.item');

function categoryName(arr) {
    console.log("Number of categories:", list.length);
    arr.forEach(element => {
        let child = element.firstElementChild;
        let secondChild = element.lastElementChild.children;

        console.log("Category:", child.textContent);
        console.log("Elements:", secondChild.length);
    })
}

categoryName(list);