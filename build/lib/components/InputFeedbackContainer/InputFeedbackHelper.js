export const buildInputState = ({ active, disabled, feedback, filled }) => {
    if (disabled)
        return 'disabled';
    if (active)
        return 'active';
    if (feedback)
        return feedback;
    if (filled)
        return 'filled';
    return 'default';
};
//# sourceMappingURL=InputFeedbackHelper.js.map