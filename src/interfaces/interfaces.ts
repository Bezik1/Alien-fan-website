import { ShaderMaterial, Mesh, PlaneGeometry } from "three";

interface WaveMaterial extends ShaderMaterial {
    uniforms: {
        u_time: {
            type: string,
            value: number
        }
        texture1: {
            type: string,
            value: THREE.Texture
        }
        u_active: {
            value: boolean
        }
    }
}

export interface Uniform extends Mesh<PlaneGeometry, WaveMaterial> {}