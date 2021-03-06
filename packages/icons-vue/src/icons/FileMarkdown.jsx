
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileMarkdownOutlineSvg from '@ant-design/icons-svg/lib/outline/FileMarkdownOutline';

export default {
  name: 'IconFileMarkdown',
  displayName: 'FileMarkdown',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileMarkdownOutlineSvg } },
      children
    ),
};
