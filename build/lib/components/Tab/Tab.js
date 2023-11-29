import React, { useEffect, useState, useCallback } from 'react';
import { ScrollView, View } from 'react-native';
import { TabWrapper, TabButton, TabText, TabButtonContent, TabIcon } from './Tab.styles';
export const Tab = ({ testID = 'ds-tab', tabOptions, onChange, position = 'fixed', iconPosition, elevation = false, backgroundColor = true, accessible = false, accessibilityRole = 'tab', brand }) => {
    const [activeTab, setActiveTab] = useState(0);
    const TabPositionType = position === 'fixed' ? View : ScrollView;
    const handlePress = (index) => {
        onChange(index);
        setActiveTab(index);
    };
    const getCurrentType = (index, disabled = false) => {
        if (activeTab === index && !disabled) {
            return 'primary';
        }
        return 'secondary';
    };
    const getSelectedTab = useCallback(() => {
        let selected = 0;
        tabOptions.find((tab, index) => {
            if (tab.selected && !tab.disabled) {
                selected = index;
                return true;
            }
            return false;
        });
        return selected;
    }, [tabOptions]);
    useEffect(() => {
        const selectedIndex = getSelectedTab();
        setActiveTab(selectedIndex);
    }, [getSelectedTab]);
    return (<TabWrapper as={TabPositionType} iconPosition={iconPosition} backgroundColor={backgroundColor} elevation={elevation} testID={testID} accessible={accessible} accessibilityRole={accessibilityRole}>
      {tabOptions.map((tabOption, index) => {
        const currentType = getCurrentType(index, tabOption.disabled);
        return (<TabButton brand={brand} accessible={accessible} disabled={tabOption.disabled} key={tabOption.key} onPress={() => handlePress(index)} type={currentType} testID={`${testID}-item-${index}`}>
            <TabButtonContent iconPosition={iconPosition}>
              {tabOption.iconName && iconPosition
            && (<TabIcon type={currentType} disabled={tabOption.disabled} accessibilityRole="imagebutton" name={tabOption.iconName} size="standard"/>)}
              <TabText iconPosition={iconPosition} type={currentType} disabled={tabOption.disabled}>
                {tabOption.label.toUpperCase()}
              </TabText>
            </TabButtonContent>
          </TabButton>);
    })}
    </TabWrapper>);
};
//# sourceMappingURL=Tab.js.map