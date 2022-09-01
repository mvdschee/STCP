import { h, Component } from './vendor/preact.js';
import { Clock } from './components/Clock.tsx';
import { eventServices, sendMessage } from './services/events.ts';

export class App extends Component {
    state;

    constructor() {
        super();
        this.state = { messages: [] };
    }

    updateMessage = (messages: Map<string, string[]>) => {
        this.setState({ messages: messages.get('Max') });
    };

    componentDidMount() {
        eventServices(this.updateMessage);

        setInterval(() => {
            sendMessage({
                type: 'msg',
                message: 'HelloWorlds',
                name: 'Max',
            });
        }, 3000);
    }

    render() {
        return (
            <div>
                <Clock />
                <ul>{this.state.messages.length ? this.state.messages.map((message) => <li>{message}</li>) : null}</ul>
            </div>
        );
    }
}
