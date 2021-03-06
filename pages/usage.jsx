import React from 'react';
import moment from 'moment';
import {
  Typography,
} from 'antd';
import {
  CodeOutlined,
} from '@ant-design/icons';
import superagent from '../helpers/superagent';

import Layout from '../components/Layout';
import PopulerPublishers from '../components/context/populerPublishers';

moment.locale('ku');

class Usage extends React.Component {
  render() {
    const { publishers } = this.props;
    return (
      <PopulerPublishers.Provider value={publishers}>
        <div style={{ padding: '1.1em' }}>
          <Layout containerStyle={{ padding: 25 }}>
            <Typography.Title>
              <CodeOutlined />
              {' '}
              به‌كارهێنان
            </Typography.Title>
            <Typography.Paragraph style={{ fontSize: 18 }}>
              هه‌موو كه‌سێك و لایه‌نێك ئازاده‌ له‌ به‌كارهێنانی ئه‌م ماڵپه‌ره ده‌توانیت لینكی
              RSS Feed ی ماڵپه‌ره‌كه‌ت دابنێیت ئه‌م سیسته‌مه‌ به‌ شێوازێكی
              خۆكارانه‌ نوێترین پۆسته‌كان له‌ ماڵپه‌ره‌كه‌ت وه‌رده‌گرێت و لێره‌دا پۆستیان ده‌كات‌
            </Typography.Paragraph>
            <u><h2>مه‌رجه‌كانی به‌كارهێنان</h2></u>
            <Typography.Paragraph style={{ fontSize: 18 }}>
              هه‌موو جۆره‌ ماڵپه‌رێك و به‌سته‌رێكی ته‌كنه‌لۆجیا رێگه‌پێدراوه‌
              به‌ده‌ر له‌مه‌ به‌سته‌ر ده‌سرێته‌وه‌ و به‌كارهێنه‌ر بلۆك ده‌كرێت،
              <br />
              به‌كارهێنانی URL Shortner ه‌كان پێویست نیه‌ و زۆربه‌یان بلۆك كراون له‌ لایه‌ن ئێمه‌وه‌
            </Typography.Paragraph>
          </Layout>

        </div>
      </PopulerPublishers.Provider>
    );
  }
}
export default Usage;
export async function getServerSideProps() {
  const publisherRes = await superagent.get('/publisher/populer/list')
    .query({
      limit: 10,
      offset: 0,
    });
  return {
    props: {
      publishers: publisherRes.body,
    },
  };
}
