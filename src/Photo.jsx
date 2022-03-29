import Layout from './Layout';

const Photo = (props) => {
    const { imgthumbnailurl, title, img } = props;
    return (
        <div className="card col-lg-3 col-md-5 col-sm-5 border displayInflex">
            <Layout imgthumbnailurl={imgthumbnailurl} img={img} />
            <div className="card-body">
                <b>Title : </b>
                {title}
            </div>
        </div>
    );
};
export default Photo;
