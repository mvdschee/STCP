import { h, Component } from './vendor/preact.js';
import { Input } from './components/Input.tsx';
import { eventServices } from './services/events.ts';

export class App extends Component {
    state;

    constructor() {
        super();
        this.state = { users: new Map() };
    }

    updateMessages = (data: Map<string, Record<string, string | number>[]>, type: string) => {
        this.setState({ users: data });
    };

    timestamp = (time: number) => {
        const date = new Date(time);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const formattedTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
        return formattedTime;
    };

    componentDidMount() {
        eventServices({ stateUpdate: this.updateMessages });
    }

    render() {
        const userContent = this.state.users.get('Max');

        return (
            <main class="main">
                <ul class="message-group">
                    {userContent &&
                        userContent.map(({ time, message }) => {
                            return (
                                <li class="message-item" key={time}>
                                    <small>{this.timestamp(time)}</small>
                                    <p>{message}</p>
                                </li>
                            );
                        })}
                </ul>

                <Input />
            </main>
        );
    }
}
