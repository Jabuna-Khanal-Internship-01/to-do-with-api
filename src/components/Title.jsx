import React, { Component } from 'react'

export default class Title extends Component {
    render() {
        return (
                <div className="to-do__header">
                    <input type="checkbox" class="to-do__header__checkbox" name="checkBox2" checked />
                    <p className ="to-do__header__checkbox__text"><u>My Todo-s</u></p>
                </div>
        )
    }
}

