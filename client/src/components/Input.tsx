import { sendMessage } from '../services/events.ts';
import { h, Component } from '../vendor/preact.js';

export class Input extends Component {
    state = { value: '' };

    onSubmit = (e) => {
        e.preventDefault();
        sendMessage({ type: 'msg', message: this.state.value, name: 'Max' });
        this.setState({ value: '' });
    };

    onInput = (e) => {
        const { value } = e.target;
        this.setState({ value });
    };

    render(_, { value }) {
        return (
            <form class="message-input" onSubmit={this.onSubmit}>
                <input type="text" value={value} onInput={this.onInput} autofocus />
                <button class="btn btn--primary" type="submit">
                    Submit
                </button>
            </form>
        );
    }
}
