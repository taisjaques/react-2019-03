import React from 'react'
import PhotoPaginationComponent from '../../components/photo-pagination/photo-pagination.component'

class PhotosPage extends React.Component {
    render() {
        return (
            <div>
                <input
                    value="voltar"
                    type="button"
                    onClick={() => this.props.history.goBack()}
                />
                <PhotoPaginationComponent />
            </div>
        )
    }
}

export default PhotosPage
