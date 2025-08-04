import Layout from '../Layout/Layout';
import { helpItem } from '../utils/options';

const Welcome = ({ version }) => {

    return <Layout version={version}>
        <div className="feature-section">
            <div className="feature-container">
                <div className="advScrollbar_welcome_container">
                    <div className="advScrollbar_left_area">
                        <div className="advScrollbar_left">
                            <h1>Welcome to Advanced Scrollbar</h1>
                            <p>Advanced Scrollbar is a powerful and versatile plugin that can help you customize and enhance the scrollbar on your WordPress website.</p>
                            <div className="img">
                                <img src="	https://ps.w.org/advanced-scrollbar/assets/banner-772x250.png?rev=3115639" alt="image" />
                            </div>
                            <div className="logo_title">

                                <div className="logo">
                                    <img src="https://ps.w.org/advanced-scrollbar/assets/icon-128x128.png?rev=1520522" alt="logo_image" />
                                </div>
                                <div className="title">
                                    <h3>Advanced Scrollbar – The ultimate scrollbar collection</h3>
                                    <span>by</span>
                                    <a href="https://bplugins.com" target="_blank" rel="noopener noreferrer">
                                        bPlugins
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="advScrollbar_left_btn">
                            <a className='action-button' href="https://bplugins.com/products/advanced-scrollbar/#pricing">
                                Buy Now
                            </a>
                            <a className='action-button' href="https://bplugins.com" target="_blank" rel="noopener noreferrer">
                                Visit Our Website
                            </a>
                        </div>
                    </div>

                    <div className="advScrollbar_right">
                        {helpItem?.map((item, index) => {
                            return (
                                <div key={index} className="item">
                                    <h2>{item?.title}</h2>
                                    <p>{item?.description}</p>
                                    <a className='action-button' href={item?.link} target="_blank" rel="noopener noreferrer">
                                        {item?.linkText}
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    </Layout>
};

export default Welcome;
