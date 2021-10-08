import React, { Component } from "react";

export default class UCS extends Component { 
    // UCS => Utterances Comment System
    constructor(props) {
        super(props);
        this.commentBox = React.createRef(); // use ref to create our element
    }

    componentDidMount() {
        let scriptEl = document.createElement("script");
        scriptEl.setAttribute("src", "https://utteranc.es/client.js");
        scriptEl.setAttribute("crossorigin", "anonymous");
        scriptEl.setAttribute("async", true);
        scriptEl.setAttribute("theme", 'github-light');
        scriptEl.setAttribute("repo", "im-coder-lg/nextjs-blog"); // i.e. im-coder-lg/nextjs-blog
        scriptEl.setAttribute("issue-term", "title"); // you can change 'title' with other options
        scriptEl.setAttribute("label", "nextjs-blog-comments");
        this.commentBox.current.appendChild(scriptEl);
    }

    render() {
        return (
            <div style={{ width: '100%' }} id="comments">
                <div ref={this.commentBox} />
            </div>
        );
    }
}