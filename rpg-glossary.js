class Glossary extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.attachShadow({mode: 'open'});


        const details = createElement('details');
        if (this.getAttribute('css')) {
            details.append(createElement(
                'link',
                {
                    rel:'stylesheet',
                    href:`${this.getAttribute('css')}`
                }
            ));
        }
        const summary = createElement('summary');
        summary.innerText = "Glossary";
        details.append(summary);
        const list = createElement('dl');
        document.querySelectorAll('dfn + span.rpg-definition').forEach(defSpan => {
            const term = createElement('dt');
            const def = createElement('dd');
            const defDfn = defSpan.previousElementSibling;
            term.innerText = defDfn.innerText;
            def.innerText = defSpan.innerText;
            list.append(term,def);
        });
        details.append(list);
        this.shadowRoot.append(details);
    }
}

customElements.define("rpg-glossary", Glossary);


function createElement(element, styles=null, props=null) {
    if (arguments.length == 2 && typeof styles == "object") props = styles;
    const newElement = document.createElement(element);
    if (styles && props != styles) newElement.classList.add(...styles.split(' '));
    if (props) {
        for (let [key,value] of Object.entries(props)) {
            newElement.setAttribute(key,value);
        }
    }
    return newElement;
}