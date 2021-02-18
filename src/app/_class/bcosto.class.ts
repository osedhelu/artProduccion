export interface Bases_consto { 
	ID_DOMINIO: string;
	ID_GRUPO_DOMINIO:string;
	ITEM: number;
	VALOR1: string;
	VALOR2: string;
	VALOR3: string;
	VALOR4: string;
};

export interface ManoObra {
	BASE: string  
	CLASE: string;
	CODIGO: string;
	DESCRIPCION: string;
	ESTADO: string;
	FECHA_DESDE: string;
	FECHA_HASTA: string;
	HORAS_TURNO: string;
	ID_UN: string;
	TIPO: string;
	UNIDAD_MEDIDA: string;
	VALOR: string;
}

export interface ClassCif {
	BASE: string,
	CLASE: string,
	CODIGO: string,
	DEFECTO: string,
	DESCRIPCION: string,
	ESTADO: string,
	FECHA_DESDE: Date,
	FECHA_HASTA: Date,
	HORAS_TURNO: string,
	ID_UN: string,
	TIPO: string,
	UNIDAD_MEDIDA: string,
	VALOR: number
}

export interface ClassSecciones {
	ANTERIOR: string
	ASIGNABLE: string
	DESCRIPCION: string
	ESTADO: string
	ID_SECCION: string
	ID_UN: string
	ID_UN_ITEM: string
	INVENTARIO: string
	ITEM: string
	MANO_OBRA: string
	MSG: string
	TIPO: string
	items: ClassSecciones[]
}