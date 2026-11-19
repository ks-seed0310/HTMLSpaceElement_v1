class HTMLSpaceElement extends HTMLElement{
                constructor(){
                    super()
                }
                connectedCallback(){
                    const template_ts={
                        volumeIcon1:`<svg viewBox="0 0 24 24" width="24" height="24" class="spaceel_volumeicon1"><circle cx="12" cy="12" r="11" fill="#619fcf" /><path d="M10.5 6L6.5 9.5H3.5v5h3l4 3.5V6z" fill="#ffffff" /><g fill="none" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 9a4 4 0 0 1 0 6" /><path d="M17.5 6.5a8 8 0 0 1 0 11" /></g></svg>`,
                        fullscreen1:`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="spaceel_fullscreen1"><path d="M9.5 4.5H4.5v5L6.7 7.3l2.8 2.8 1.4-1.4-2.8-2.8z"/><path d="M14.5 4.5h5v5l-2.2-2.2-2.8 2.8-1.4-1.4 2.8-2.8z"/><path d="M4.5 14.5v5h5l-2.2-2.2 2.8-2.8-1.4-1.4-2.8 2.8z"/><path d="M19.5 14.5v5h-5l2.2-2.2-2.8-2.8 1.4-1.4 2.8 2.8z"/></svg>`,
                        fullscreen2:`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="spaceel_fullscreen2"><path d="M10 5v5H5l2.2-2.2-3.3-3.3 1.4-1.4 3.3 3.3z" /><path d="M14 5v5h5l-2.2-2.2 3.3-3.3-1.4-1.4-3.3 3.3z" /><path d="M10 19v-5H5l2.2 2.2-3.3 3.3 1.4 1.4 3.3-3.3z" /><path d="M14 19v-5h5l-2.2 2.2 3.3 3.3-1.4 1.4-3.3-3.3z" /></svg>`,
                        trashbox_red:`<svg viewBox="0 0 24 24" width="24" height="24" class="spaceel_trashbox_red"><circle cx="12" cy="12" r="12" fill="#FF3B30" /><g stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" fill="none"><path d="M10.5 7V6a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1" /><path d="M7 7h10" /><path d="M8 7l0.7 9.5a1.5 1.5 0 0 0 1.5 1.5h3.6a1.5 1.5 0 0 0 1.5-1.5L16 7" /><path d="M10.5 10.5v4M13.5 10.5v4" /></g></svg>`,
                    }
                    const size=this.getAttribute("s")
                    const mirror=this.getAttribute("mirror")!==null
                    const childstyle=this.getAttribute("childstyle")??""
                    const template=this.getAttribute("template")
                    const template_res=template_ts[template]??""
                    const add=(function(){
                        if (!isNaN(Number(size))){
                            return "px"
                        }else{
                            return ""
                        }
                    })()
                    this.innerHTML=`<span style="padding-left:${size}${add};padding-right:${mirror?size:0}${mirror?add:"px"};${childstyle}" class="HTMLSpaceElement_node">${this.innerHTML}${template_res}</span>`
                }
            }
            customElements.define("sp-e",HTMLSpaceElement)
