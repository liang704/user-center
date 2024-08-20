import {GithubOutlined} from '@ant-design/icons';
import {DefaultFooter} from '@ant-design/pro-layout';
import {PLANET_LINK} from "@/constants";

const Footer: React.FC = () => {
  const defaultMessage = 'liang出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'planet',
          title: '知识星球',
          href: PLANET_LINK,
          blankTarget: true,
        },
        {
          key: 'codeNav',
          title: '学习导航',
          href: 'https://github.com',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined/> 梁 GitHub</>,
          href: 'https://github.com/liang704',
          blankTarget: true,
        },

      ]}
    />
  );
};

export default Footer;
