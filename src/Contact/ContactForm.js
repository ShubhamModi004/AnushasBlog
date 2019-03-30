import React, { Component } from 'react'

export default class ContactForm extends Component {
    render() {
        return (
            <div>
                <form action="https://formspree.io/anushas.designer@gmail.com" method="POST" class="ContactUsForm">
                    <div class="form-groups">
                        <div class="form-group">
                            <input type="text" class="form-control" name="name" placeholder="NAME" />
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" name="email" placeholder="EMAIL" />
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" name="subject" placeholder="PHONE NUMBER" />
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" name="body" placeholder="MESSAGE" cols="30" rows="10"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary btn-lg pull-right">Send</button>
                    </div>
                </form> 
            </div>
        )
    }
}




