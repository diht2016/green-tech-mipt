let textList = document.getElementById('text-list')
let legend = document.getElementById('legend')
let filter = document.getElementById('filter')

function toggleHidden(elem) {
  if (elem.hidden) {
    // close all boxes before opening this box
    for (let otherElem of document.getElementsByClassName('bordered-box')) {
      otherElem.hidden = true
    }
  }
  elem.hidden = !elem.hidden

  if (!elem.hidden) {
    scrollToElement(elem)
  }
}

function scrollToElement(elem, limit=40, iter=0, k=0.12, delay=15) {
  if (iter >= limit) {
    return
  }
  let rect = elem.getClientRects()[0]
  if (!rect) {
    return
  }
  let delta = rect.top * k
  document.documentElement.scrollTop += delta
  setTimeout(scrollToElement, delay, elem, limit, iter + 1, k, delay)
}

// util functions
let wrap = (content, tagName) => '<' + tagName + '>' + content + '</' + tagName + '>'
let capitalize = (str) => str[0].toUpperCase() + str.slice(1)


let inactiveItemMessages = (item) => {
  //if (item.info && item.info.includes("боталк")) {
  //  // all book rooms are closed now
  //  return "Боталки в общежитиях закрыты в связи с режимом самоизоляции"
  //}
  return null
}

// data completion
for (let p of places) {
  if (p.id.match(/^\d+$/) && !p.name) {
    p.name = 'Общежитие №' + p.id
  }

  // disable all inactive items
  if (inactiveItemMessages && p.items) {
    p.items.forEach((item) => {
      let inactiveFor = inactiveItemMessages(item)
      if (inactiveFor) {
        item.disabled = inactiveFor
      }
    })
  }
}


// alternative map source
// 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}'
// id: 'mapbox.streets',
// accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'

function createMap(elementId) {
  let map = L.map(elementId).setView(global.coords, global.zoom)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: global.maxZoom,
    minZoom: global.minZoom,
  }).addTo(map)

  let textListHTML = ''

  // process places, create markers
  for (let p of places) {
    let marker = L.marker(p.coords, {
      alt: p.name,
    }).addTo(map)

    let content = wrap(p.name + ':', 'h3')
    if (p.items) {
      content += wrap(p.items.map(item => {
          let content = wrap(item.title, 'b') + (item.info ? ': ' + item.info : '')
          if (item.disabled) {
            content = wrap(content, 's') + ' [' + item.disabled + ']'
            content = '<span style="opacity: 0.5">' + content + '</span>'
          }
          return wrap(content, 'li')
        }).join(''), 'ul')
    }
    if (p.comment) {
      content += wrap(p.comment, 'p')
    }

    textListHTML += content

    let popup = L.popup()
      .setLatLng(p.coords)
      .setContent(content)

    marker.addEventListener('click', () => popup.openOn(map))
    marker.bindTooltip(p.name)
    marker._icon.classList.add('marker-' + p.type)
    p._marker = marker
  }

  textList.innerHTML = textListHTML

  return map
}

let map = createMap('map-container')
