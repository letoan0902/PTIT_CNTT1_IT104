import { Component } from "react";

interface DetailPostProps {
  id: number;
  title: string;
  content: string;
  author: string;
}

export default class DetailPost extends Component<DetailPostProps> {
  render() {
    const { id, title, content, author } = this.props;
    return (
      <div style={{ borderBottom: "1px solid #ccc", marginBottom: "10px" }}>
        <p><b>Id:</b> {id}</p>
        <p><b>Title:</b> {title}</p>
        <p><b>Content:</b> {content}</p>
        <p><b>Author:</b> {author}</p>
      </div>
    );
  }
}