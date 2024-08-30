import React, { useCallback, useMemo, useState } from 'react';

const operations = {
    ADD: (a, b) => a + b,
    SUBTRACT: (a, b) => a - b,
}

export const Calculator = ({ a = 0, b = 0, operationInitial = operations.ADD }) => {
    const [operandA, setOperandA] = useState(a);
    const [operandB, setOperandB] = useState(b);
    const [operation, setOperation] = useState(() => operationInitial);

    const result = useMemo(() => {
        return operation(operandA, operandB);
    }, [operandA, operandB, operation]);

    const onChangeHandler = useCallback(({ target }) => {
        const { name, value } = target;

        if (name === 'operanda') {
            setOperandA(parseInt(value, 10));
        }

        if (name === 'operandb') {
            setOperandB(parseInt(value, 10));
        }
    }, [])

    return (
        <div>
            <button onClick={() => setOperation(() => operations.ADD)}>+</button>
            <button onClick={() => setOperation(() => operations.SUBTRACT)}>-</button>
            <input name="operanda" type="number" value={operandA} onChange={onChangeHandler} />
            <input name="operandb" type="number" value={operandB} onChange={onChangeHandler} />
            <p>Result: {result}</p>
        </div>
    )
}
