import styled from 'styled-components/native';
export const Container = styled.View(({ theme, color = 'primary' }) => ({
    display: 'flex',
    width: '240px',
    height: '40px',
    padding: '5px',
    alignContent: 'center',
    justifyContent: 'center',
    border: '1px solid #ccc',
    backgroundColor: theme.color[color],
    gap: '5px'
}));
export const Grid = styled.View(({ theme, color = 'primary' }) => ({
    display: 'flex',
    width: '320px',
    height: '60px',
    padding: '5px',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: theme.color[color],
    gap: '5px'
}));
export const ColorText = styled.View(({ theme }) => ({
    color: theme.color.lowEmphasis
}));
export const ContainerDeprecated = styled.View(({ theme }) => ({
    boxSizing: 'border-box',
    paddingLeft: '5px',
    borderRadius: 999,
    backgroundColor: theme.color.alert
}));
export const ContainerinternalOnly = styled.View(({ theme }) => ({
    boxSizing: 'border-box',
    paddingLeft: '5px',
    borderRadius: 999,
    backgroundColor: theme.color.info
}));
//# sourceMappingURL=ColorView.styles.js.map