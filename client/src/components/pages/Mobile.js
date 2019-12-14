import React, { useEffect } from "react";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getPost } from "../../actions/post";
import MobileItem from "./MobileItem";
import { Grid } from "semantic-ui-react";
const Mobile = ({ getPost, post: { posts, loading } }) => {
  useEffect(() => {
    getPost();
  }, [getPost]);
  return loading ? (
    <Spinner />
  ) : (
    <div>
      <div className="mobile-banner"></div>

      <h1
        className="ui header"
        style={{
          paddingBottom: "20px",
          textAlign: "center"
        }}
      >
        Điện thoại giá rẻ 2019
      </h1>
      <div style={{ margin: " 0px 30px" }}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
              <div style={{ margin: " 10px 20px" }}>
                <h4>Các danh mục khác</h4>
                <div class="ui vertical menu ">
                  <a class="item">Dịch vụ</a>
                  <a class="item">Thú cưng</a>
                  <a class="item">Việc làm</a>
                  <a class="item">Thời trang</a>
                  <a class="item">Xe cộ</a>
                  <a class="item"></a>
                  <div class="item">
                    <div class="ui icon input">
                      <input type="text" placeholder="Search mail..." />
                      <i aria-hidden="true" class="search icon"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="banner-doc2"></div>
            </Grid.Column>
            <Grid.Column width={10}>
              {posts.map(post => (
                <MobileItem key={post._id} post={post} />
              ))}
            </Grid.Column>

            <Grid.Column width={3}>
              <div className="banner-doc"></div>
              <div className="banner-doc"></div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  post: state.post
});
export default connect(mapStateToProps, { getPost })(Mobile);
