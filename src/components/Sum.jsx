import React from 'react'
import Card from './Card'

export default props => {
    const { min, max } = props
    return (
        <Card title="Sum" light>
            <div>
                <span>
                    <span>Result: </span>
                    <strong>{min + max}</strong>
                </span>
            </div>
        </Card>
    )
}