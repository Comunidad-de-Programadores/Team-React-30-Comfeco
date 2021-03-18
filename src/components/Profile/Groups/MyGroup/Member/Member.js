import User from '../../../../Icons/User';
import './member.css';

const Member = ({ username, isLeader }) => (
  <div className="group-member">
    <div className="group-member-name">
      <User width={20} height={20} />
      <span>{username}</span>
    </div>
    <span>{isLeader ? 'Líder' : 'Integrante'}</span>
  </div>
);

export default Member;
