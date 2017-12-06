'use strict';

export default class FaceRecognition {
    constructor() {
        this.CameraAddress = '';
        this.FaceImagePath = '';
        this.SceneImagePath = '';
        this.FaceX = 0;
        this.FaceY = 0;
        this.FaceWidth = 0;
        this.FaceHeight = 0;
        this.IsHit = false;
        this.HitImagePath = '';
        this.Similarity = 0;
        this.PersonId = '';
        this.PersonName = '';
    }
}