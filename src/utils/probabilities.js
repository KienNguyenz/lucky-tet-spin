/**
 * Selects a reward based on its weight.
 * @param {Array} rewards - Array of reward objects with a 'weight' property.
 * @returns {Object} - The winning reward object.
 */
export const getWeightedReward = (rewards) => {
    const totalWeight = rewards.reduce((sum, item) => sum + item.weight, 0);
    let random = Math.random() * totalWeight;

    for (const reward of rewards) {
        if (random < reward.weight) {
            return reward;
        }
        random -= reward.weight;
    }

    return rewards[0]; // Fallback
};

export const defaultRewards = [
    { id: 1, label: "50,000₫", value: 50000, weight: 15, color: "#FFEB3B" },
    { id: 2, label: "100,000₫", value: 100000, weight: 25, color: "#FFEB3B" },
    { id: 3, label: "200,000₫", value: 200000, weight: 30, color: "#D32F2F" },
    { id: 4, label: "500,000₫", value: 500000, weight: 10, color: "#D32F2F" },
    { id: 5, label: "1,000,000₫", value: 1000000, weight: 10, color: "#D32F2F" },
    
    { id: 6, label: "2,000,000₫", value: 2000000, weight: 10, color: "#D32F2F" },
];
