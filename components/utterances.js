import React, { Component } from "react";

export default class Comments extends Component {

    constructor(props) {
        super(props);
        this.commentBox = React.createRef(); // use ref to create our element
    }

    componentDidMount() {
        scriptEl.setAttribute("theme", 'github-light');
        let scriptEl = document.createElement("script");
        scriptEl.setAttribute("src", "https://utteranc.es/client.js");
        scriptEl.setAttribute("crossorigin", "anonymous");
        scriptEl.setAttribute("async", true);
        scriptEl.setAttribute("repo", "im-coder-lg/my-blog-comments"); // i.e. bjcarlson42/comments-coffeeclass.io
        scriptEl.setAttribute("issue-term", "url"); // you can change 'url' with other options
        scriptEl.setAttribute("label", "Comments");
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