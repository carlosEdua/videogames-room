import React from 'react';
// styles
import './styles/noticiaForm.css';

function NoticiaForm({handleChange, handleSave, titulo, descripcion}) {
	return(
		<div className="noticiaForm-container">
			<div className="columns is-centered">
				<div className="card is-half column">
					<div className="card-content">
						<div className="field">
							<label className="label">Titulo</label>
							<input onChange={handleChange} name="titulo" type="text" className="input" defaultValue={titulo}/>
						</div>
						<div className="field">
							<label className="label">Descripción</label>
							<textarea onChange={handleChange} name="descripcion" cols="30" rows="10" defaultValue={descripcion}></textarea>
						</div>
					</div>
					<button onClick={handleSave} className="button is-fullwidth is-link">guardar</button>
				</div>
			</div>
		</div>
	);
}
export default NoticiaForm;