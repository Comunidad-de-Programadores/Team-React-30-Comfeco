const ViewItem = ({ component, children }) => (component && component()) || children;

export default ViewItem;
