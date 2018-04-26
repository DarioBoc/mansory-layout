const masonryLayout = (containerElement, itemsElement, columns) => {
    containerElement.classList.add('masonry-layout', `columns-${columns}`)
    let columnsElements = []

    for(let i = 1; i <= columns; i++) {
        let column = document.createElement('div')
        column.classList.add('masonry-column', `column-${i}`)
        containerElement.appendChild(column)
        columnsElements.push(column)
    }

    for(let m = 0; m < Math.ceil(itemsElement.length / columns); m++) {
        for(let n = 0; n < columns; n++){
          let item = itemsElement[ m * columns + n]
          columnsElements[n].appendChild(item)
          item.classList.add('masonry-item')
        }
    }
}

masonryLayout(document.getElementById('gallery'), document.querySelectorAll('.gallery-item'), 3)
