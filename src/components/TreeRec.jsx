import React from 'react'

export default function TreeRec() {
    return (
        <div className="mt-8">
            <h3 className="text-xl font-semibold">Recommended Trees for Planting:</h3>
            <ul className="list-disc list-inside">
                {treeRecommendations.length > 0 ? (
                    treeRecommendations.map((tree, index) => (
                        <li key={index} className="text-lg">{tree}</li>
                    ))
                ) : (
                    <li>No recommendations available.</li>
                )}
            </ul>
        </div>
    )
}
