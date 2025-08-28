import { useReducer, type CSSProperties } from 'react';

interface State {
    count: number;
}

type Action = {
    type: 'increase' | 'decrease';
};

const initialState: State = { count: 0 };

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'increase':
            return { count: state.count + 1 };
        case 'decrease':
            return { count: state.count - 1 };
        default:
            return state;
    }
};

export default function Increase() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const container: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        background: '#f0f4f8',
        borderRadius: 16,
        width: 220,
        margin: '50px auto',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        fontFamily: 'Arial, sans-serif',
    };

    const count: CSSProperties = {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 12,
    };

    const buttons: CSSProperties = {
        display: 'flex',
        gap: 8,
        width: '100%',
    };

    const btn: CSSProperties = {
        flex: 1,
        padding: '8px 0',
        borderRadius: 8,
        border: 'none',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: '0.2s',
    };

    return (
        <div style={container}>
            <h2 style={count}>{state.count}</h2>
            <div style={buttons}>
                <button
                    style={{
                        ...btn,
                        backgroundColor: '#4caf50',
                        color: 'white',
                    }}
                    onClick={() => dispatch({ type: 'increase' })}
                >
                    Increase
                </button>
                <button
                    style={{
                        ...btn,
                        backgroundColor: '#f44336',
                        color: 'white',
                    }}
                    onClick={() => dispatch({ type: 'decrease' })}
                >
                    Decrease
                </button>
            </div>
        </div>
    );
}