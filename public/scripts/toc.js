$("document").ready(function () {
  let tocDiv = $("div[role='toc']");
  tocDiv.append(
    "<ul class='toc-list' role='toc-list'></ul>"
  );

  let tocList = $("ul[role='toc-list']");

  let h2OffsetTop = getOffsetTop("h2");

  $(window).on('scroll', function (ev) {
    let postTitle = $("div[class='post-title']");

    if ( $(window).scrollTop() > postTitle.offset().top ) {
      tocDiv[0].classList.add("visible");
    } else {
      tocDiv[0].classList.remove("visible");
    }

    for (var key in h2OffsetTop) {
      let value = h2OffsetTop[key];
      let activeArea = $(window).scrollTop() + ( 0.5 * $(window).height() );

      if (activeArea >= value && $(window).scrollTop() <= value) {
        clearClass("ul[role='toc-list']>li", "active")
        $("a[class='toc-list-item'][href='#"+ key +"'").parent()[0].classList.add("active");
      }
    }
  });

  $("h2").each(function (firstId) {
    tocList.append(
      `<li class='toc-list-item'>
        <a class='toc-list-item' href='#`+ $( this ).attr('id') +`'>`+ $( this ).text() +`</a>
      </li>`
    );
  });
});

function insertUnorderedList(element) {
  let ul = createHTMLElement("ul", [
    {
      name: "class",
      value: "toc-list"
    },
    {
      name: "role",
      value: "toc-list"
    }
  ]);

  $(element).append( ul );

  return ul;
}

function insertListItem(element) {
  let li = createHTMLElement("li", [
    {
      name: "class",
      value: "toc-list-item"
    }
  ]);

  $(element).append(li);

  return li;
}

function insertAnchorLink(element, href, text) {
  let anchor = createHTMLElement("a", [
    {
      name: "class",
      value: "toc-list-item"
    },
    {
      name: "href",
      value: "#"+href
    }
  ], text);

  $(element).append(anchor);

  return anchor;
}

function createHTMLElement(element, attr, text=null) {
  let el = document.createElement(element);

  attr.forEach(attrib => {
    let att = document.createAttribute(attrib["name"]);
    att.value = attrib["value"];
    el.setAttributeNode(att);
  });

  if (text !== null) {
    let txt = document.createTextNode(text);
    el.appendChild(txt);
  }

  return el;
}

function insertChildToParent(childParentPair) {
  let knownParent = [];

  childParentPair.forEach(pair => {
    let child = pair["child"];
    let parent = pair["parent"];
    let tocListItemParent = $("a[class='toc-list-item'][href='#"+ parent.getAttribute("id") +"'").parent()[0];

    let duplicate = false;

    knownParent.forEach(par => {
      if (par !== undefined) {
        duplicate = parent.isEqualNode(par);
      }
    });

    if (!duplicate) {
      console.log("not duplicate");
      
      knownParent.push(parent);

      insertUnorderedList(tocListItemParent);
    }

    let ul = $(tocListItemParent).children("ul");

    let li = insertListItem(ul);

    insertAnchorLink(li, child.getAttribute("id"), child.textContent);
  });
}

function test() {
  let cppair = getChildParentPair("h3", "h2");

  insertChildToParent(cppair);
}

function getChildParentPair(child, parent) {
  let retr = [];

  $(child).each(function (id) {
    let p = $(this).prevAll(parent)[0];

    if (p) {
      retr.push({
        child: this,
        parent: p
      });
    }
  });

  return retr;
}

function clearClass(selector, cl) {
  $(selector).each(function (id) {
    this.classList.remove(cl);
  });
}

function getOffsetTop(selector) {
  let retr = {};
  $(selector).each(function (id) {
    retr[$(this).attr("id")] = $(this).offset().top;
  });

  return retr;
}