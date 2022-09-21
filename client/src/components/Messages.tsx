import { h, Component } from '../vendor/preact.js';
import { eventServices } from '../services/events.ts';
import { timestamp } from '../utils.ts';

export class Messages extends Component {
    state;

    constructor() {
        super();
        this.state = { messages: [] };
    }

    updateMessages = (data: Map<string, Record<string, string | number>[]>, type: string) => {
        this.setState({ messages: data });
    };

    componentDidMount() {
        eventServices({ stateUpdate: this.updateMessages });
    }

    render() {
        return (
            <ul class="message-group">
                {messages &&
                    messages.map(({ time, message }) => {
                        return (
                            <li class="message-item" key={time}>
                                <small>{timestamp(time)}</small>
                                <p>{message}</p>
                            </li>
                        );
                    })}
            </ul>
        );
    }
}
