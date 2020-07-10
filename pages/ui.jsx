import React from 'react';
import moment from 'moment';
import {
  Row, Col,
  Carousel,
} from 'antd';

import Slide from '../components/Slide';
import PostCard from '../components/PostCard';
import Layout from '../components/Layout';

moment.locale('ku');

class UI extends React.Component {
  render() {
    const data = [
      {
        img: 'https://www.sentry.dev/_assets2/static/index-header-lg-6a2edfb1d9841893801fd45ce890f904.jpg',
        title: 'هەڵەی کۆدەکانت بدۆزەوە بە باکارهێنانی sentry.io',
        desc: 'سڵاو لەپاش دابڕانێکی هێجگار زۆر، من سامڕەند حاجی سەرنوسەری ماڵپەری درەختی گەشەپێدەران و لێکۆڵەرەوەی بواری ئاسایشی زانیاریەکان لەگاڵتاندام بۆ زنجیرەیەک بابەت کە تایبەتە بە پاراستنی زانیاریەکان هەرچەندە چەندین بابەتی سەربەخۆ لەسەر پاراستنی زانیاریەکان لە ماڵپەرەکەماندا هەیە، بەڵام دەمانەوەێت هەمووی لە چەند زنجیرەیەکدا باس بکەینەوە. لە ماڵپەرەکەمانەوە بینەربە.',
      },
      {
        title: 'مانای کۆد نوسین بزانە بۆ ئەوەی ببیت بە کەسێکی سەرکەوتوو',
        img: 'https://devstree.io/wp-content/uploads/2019/10/1_zTdZMxbTkVdXCOoZlXLnsg.png',
        desc: 'وەك ئاگادارین فلەتەر ئێستا بۆتە یەكەێك لە بەناوبانگترین تەكنەلۆجیای دروست كردنی ئاپی مۆبایل و ئێمە ڵەم بابەتەیا فێرتان ئەكەین چۆن لەسەر كۆمپیوتەرەكانمان جێگیری بكەین و كاری پێبكەین.',
      },
      {
        title: 'فڵەتەر فێرببە دامەزراندنی بۆ یەکەم جار',
        img: 'https://codete.com/blog/wp-content/uploads/2018/07/cover-flutter-blog.jpg',
        desc: 'ئێمە چەند پڕۆژەیەکەمان هەیە و پڕۆژەکانیش هەمووی سەرچاوەکراوەن. بۆ نموونە ناوی کوردی و پێرمادیلیت. بەڵام ئەوجارە پلانمان وایە کە جگە لەوەی کۆدەکەی سەرچاوەکراوەبێت، تەواوی پڕۆسەی درووست کردنەکەشی ڕیکۆرد بکەین و لە وێبسایتی درەختی گەشەپێدەران بڵاویکەینەوە.',
      },
      {
        title: 'پلەیس هۆڵدەرەکە',
        img: 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png',
        desc: 'هیچ كاتێك هه‌بووه‌ پرۆگرامێك نوسیوه‌و له‌ سه‌ر سێرڤه‌ر كێشه‌ی هه‌بووبێت و نه‌تزانیبێت چیه‌ یان كاتێك له‌سه‌ر كۆمپیته‌ری كه‌سێك هه‌ڵه‌یه‌ك رووده‌ده‌ات نازانیت بۆچی ئه‌مه‌ رویداوه‌‌ زۆر به‌سوود ده‌بێت ئه‌گه‌ر بێتو هه‌ڵه‌یه‌ك رویدات یه‌كسه‌ر پێیبزانیت رێك وه‌ك ئه‌وه‌ی خۆت كۆده‌كه‌ت debug بكه‌یت، له‌ به‌ختی ئێمه‌ sentry.io  رێك ئه‌و كاره‌ ده‌كات',
      },
    ];

    return (
      <div style={{ padding: 40 }}>
        <Layout>
          <Row>
            <Col span={24}>
              <Carousel dots={{ className: 'slider-controller-container' }}>
                {data.map((d) => (
                  <Slide data={d} />
                ))}
              </Carousel>
            </Col>
          </Row>
          <Row style={{ marginTop: 10 }} gutter={[10, 10]}>
            {data.map((d) => (
              <Col span={12}>
                <PostCard data={d} />
              </Col>
            ))}
          </Row>
        </Layout>

      </div>
    );
  }
}
export default UI;
