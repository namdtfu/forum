import React, {Component} from 'react';
import profilePicture from "../../../assets/profile/profilepicture.jpg";
import {Editor} from "@tinymce/tinymce-react";
import $ from "jquery";

class PostATopic extends Component {
    state = {
        title: "",
        topicSender: "",
    };

    handleChange = (event) => {
        const target = event.target;
        const {name, value} = target;
        this.setState({
            [name]: value,
        });
    };

    handleEditorChange = (event) => {
        this.setState({
            topicSender: event,
        });
    };
    render() {
        return (
            <>
                <section className="col-12 col-md-12 offset-lg-2 col-lg-8 mt-3">
                    <div className="topicSender">
                        <div className="topicSender-top">
                            <div>
                                <div>
                                    <img src={profilePicture} alt=""/>
                                </div>
                                <textarea
                                    name="title"
                                    value={this.state.title}
                                    onChange={this.handleChange}
                                    cols={30}
                                    rows={3}
                                    placeholder={"Title"}
                                />
                            </div>
                        </div>
                        <div className="topicSender-middle">
                            <div>
                                <Editor
                                    apiKey="Get your free API key at tiny.cloud and paste it here"
                                    initialValue="<p> </p>"
                                    init={{
                                        height: 300,
                                        menubar: false,
                                        paste_data_images: true,
                                        image_dimensions: false,
                                        image_class_list: [
                                            {title: "Responsive", value: "img-responsive"},
                                        ],
                                        fontsize_formats:
                                            "8pt 9pt 10pt 11px 12pt 13pt 14pt 15px 16pt 17pt 18pt 19pt 20pt",
                                        style_formats: [
                                            {
                                                title: "Headers",
                                                items: [
                                                    {title: "h1", block: "h1"},
                                                    {title: "h2", block: "h2"},
                                                    {title: "h3", block: "h3"},
                                                    {title: "h4", block: "h4"},
                                                    {title: "h5", block: "h5"},
                                                    {title: "h6", block: "h6"},
                                                ],
                                            },

                                            {
                                                title: "Blocks",
                                                items: [
                                                    {title: "p", block: "p"},
                                                    {title: "div", block: "div"},
                                                    {title: "pre", block: "pre"},
                                                ],
                                            },

                                            {
                                                title: "Containers",
                                                items: [
                                                    {
                                                        title: "section",
                                                        block: "section",
                                                        wrapper: true,
                                                        merge_siblings: false,
                                                    },
                                                    {
                                                        title: "article",
                                                        block: "article",
                                                        wrapper: true,
                                                        merge_siblings: false,
                                                    },
                                                    {
                                                        title: "blockquote",
                                                        block: "blockquote",
                                                        wrapper: true,
                                                        styles: {
                                                            // display: 'inline-block',
                                                            border: "1px solid #ffcccb",
                                                            borderRadius: "5px",
                                                            padding: "2px 5px",
                                                            margin: "0 2px",
                                                            backgroundColor: "#ffcccb",
                                                            color: "#333",
                                                        },
                                                    },
                                                    {title: "hgroup", block: "hgroup", wrapper: true},
                                                    {title: "aside", block: "aside", wrapper: true},
                                                    {title: "figure", block: "figure", wrapper: true},
                                                ],
                                            },
                                        ],
                                        plugins: [
                                            "advlist autolink lists link image charmap print preview hr anchor pagebreak",
                                            "searchreplace wordcount visualblocks visualchars code fullscreen table",
                                            "insertdatetime media nonbreaking save table contextmenu directionality",
                                            "emoticons template paste textcolor colorpicker textpattern",
                                        ],
                                        toolbar1:
                                            "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
                                        toolbar2:
                                            "print preview media | forecolor backcolor emoticons | undo redo | sizeselect fontselect fontsizeselect | table",
                                        image_advtab: true,
                                        file_picker_callback: function (callback, value, meta) {
                                            if (meta.filetype === "image") {
                                                $("#upload").trigger("click");
                                                $("#upload").on("change", function () {
                                                    var file = this.files[0];
                                                    var reader = new FileReader();
                                                    reader.onload = function (e) {
                                                        callback(e.target.result, {
                                                            alt: "",
                                                        });
                                                    };
                                                    reader.readAsDataURL(file);
                                                });
                                            }
                                        },
                                        templates: [
                                            {
                                                title: "Test template 1",
                                                content: "Test 1",
                                            },
                                            {
                                                title: "Test template 2",
                                                content: "Test 2",
                                            },
                                        ],
                                    }}
                                    onEditorChange={this.handleEditorChange}
                                />
                                <input
                                    name="image"
                                    type="file"
                                    id="upload"
                                    style={{display: "none"}}
                                    onChange=""
                                />
                            </div>
                        </div>
                        <div className="topicSender-bottom">
                            <div className="topicSender-option">
                                <i className="fa fa-location-arrow" aria-hidden="true"/>
                                <h6>Post</h6>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default PostATopic;