import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../styles/Services.css';

const DS160FoiaTips: React.FC = () => (
  <div className="article-detail-page">
    <Header />
    <main>
      <h1>面谈前 DS160 丢失与 FOIA 资料获取经验分享</h1>
      <p>我碰到的一个常见问题是面谈前找到我（特别是庇护），发现 DS160 因为过了很多年，已经不见了。</p>
      <p>而偏偏 DS 160 上的内容必须和 589 和你自述上的内容对得住。那没有好多年前申请的ds160 怎么办？</p>
      <p>这件事不是无解的，你可以自己或者通过律师提交 FOIA（freedom of information act) 这个在之前的号也介绍过。</p>
      <p><strong>重点是要提早交！</strong>别拖到面谈前一个月再交，处理起来也是要花时间的。</p>
      <p>另外，（划重点）如果面谈没过，你也可以要求看你的资料。只是资料有可能有些地方是 redacted（渔民局会把一些它不想让你知道的地方涂黑）。这些资料对你上庭很有帮助。至少知道上次回答了什么。上庭时可以（尽量）保持一致。</p>
      <p style={{color: '#888', fontStyle: 'italic'}}>仅分享个人看法，不做法律有关的推荐。</p>
    </main>
    <Footer />
  </div>
);

export default DS160FoiaTips;
