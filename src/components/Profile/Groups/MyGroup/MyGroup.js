/* eslint-disable react/jsx-props-no-spreading */
import Member from './Member/Member';
import useGet from '../../../../hooks/useGet';
import './myGroup.css';

const MyGroup = () => {
  const [data,fetching, error] = useGet(`groups/605123718578bc1c6041ff6b`)
  
  if (fetching || error) return null;
  return (
    <div className="my-group">
      <h4 className="my-group-title">
        <span>Mi grupo:</span> {data && data.name}
      </h4>
      <div className="my-group-members">
        {data && data.users.map((member) => (
          <div key={member.username} className="my-group-member">
            <Member {...member} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyGroup;
