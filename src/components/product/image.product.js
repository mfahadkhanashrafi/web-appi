import React, { useState } from 'react';
// import { ImageZoom } from 'react-simple-image-zoom';
import ReactImageMagnify from 'react-image-magnify';


const getExtension = (filename) => {
    // console.log('filename', filename)
    var parts = filename.split('.');
    return parts[parts.length - 1];
}
const ImageViewProduct = (props) => {
    const [image, setImage] = useState(props.p_img.image1);
    const [myvideo, setMyvideo] = useState(null);
    // const [image, setImage] = useState(props.p_img.image1);

    const ImgMap = props.imagesArr.map((val, ind) => {
        let exe = getExtension(val)
        // if (exe) {
        //     switch (exe) {
        //         case 'png' || 'jpg':
        //             return (<div className={image === val ? 'imgSmall active' : 'imgSmall'}>
        //                 <img src={val} onMouseOver={() => setImage(val)} />
        //             </div>)
        //             break;
        //         case 'mp4':
        //             return (<div className={image === val ? 'imgSmall active' : 'imgSmall'}>
        //                 <img src={props.imagesArr[0]} onMouseOver={() => setImage(val)} title='video' />
        //             </div>)
        //             break;

        //         default:
        //             break;
        //     }
        // }
        return (<div className={image === val ? 'imgSmall active' : 'imgSmall'}>
            <img src={val} onMouseOver={() => setImage(val)} />
        </div>)
    })
    if (props.zoom !== false) {
        return (
            <div className="col-md-5">
                <div className="product-image">
                    <div className="row">
                        <div className="col-md-2">
                            {ImgMap}
                        </div>
                        <div className="col-md-10 zoomImg">
                            {getExtension(image) === 'mp4' ? <video className={'imgLarge'} controls>
                                <source src={image} type="video/mp4" />
                            </video> : <ReactImageMagnify {...{
                                imageClassName: 'imgLarge imgLargeImp',
                                enlargedImageContainerClassName: 'imgLargeT',
                                smallImage: {
                                    alt: 'Wristwatch by Ted Baker London',
                                    isFluidWidth: true,
                                    src: image,
                                },
                                largeImage: {
                                    src: image,
                                    width: 1200,
                                    height: 1800
                                },
                                shouldUsePositiveSpaceLens: true
                            }} />}

                            {/* <img src={image} /> */}
                        </div>

                    </div>


                </div>
            </div >
        )
    } else {
        return (
            <div>
                <div className="row">
                            <div className={props.modal?"col-md-12":"col-md-6"}>
                                <img src={image} />
                            </div>
                            <div className="col-md-3">
                                {ImgMap}
                            </div>
                        </div>
                        <div className="col-md-6">
                        {/* <div className="col-md-5">
                        <img src={image} />
                    </div>
                    <div className="row" style={{display:'flex',flexDirection:'row',}}>
                        <div className="col-md-1">
                            {ImgMap}
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default ImageViewProduct;