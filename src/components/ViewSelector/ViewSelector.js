import React, { useEffect } from 'react'
import { useSelector } from '../../context/selector';

const ViewSelector = ({ initialView, children }) => {
    const { selectedView, goTo } = useSelector();

    useEffect(() => goTo(initialView), []);

    const selectedChild = React.Children.toArray(children).find(child => {
        const childName = child.props.name;
        return childName === selectedView;
    });

    return selectedChild || null;
}

export default ViewSelector;
