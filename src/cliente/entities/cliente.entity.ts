import { PagoParcial } from "src/pago-parcial/entities/pago-parcial.entity";
import { PagoTotal } from "src/pago-total/entities/pago-total.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cliente {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text',{
        nullable: false
    })
    nombre: string;

    @Column('text',{
        nullable: true
    })
    apellido: string;

    @Column('text',{
        nullable: true
    })
    documento: string;

    @Column('float',{
        nullable: false
    })
    valor: number;

    @Column('text',{
        nullable: true
    })
    telefono: string;

    @Column('text',{
        nullable: true
    })
    guarda: string;

    @Column('bool',{
        nullable: true,
        default: true
    })
    isActive: boolean;

    @Column('bool',{
        nullable: true,
        default: false
    })
    pagoCompleto: boolean

    @Column('bool',{
        nullable: true,
        default: false
    })
    pagoParcial: boolean

    @Column('timestamp',{
        nullable: true,
        default: () => 'CURRENT_TIMESTAMP'
    })
    createdAt: Date;

    @Column('timestamp',{
        nullable: true,
        default: () => 'CURRENT_TIMESTAMP'
    })
    updatedAt: Date;

    @OneToMany(()=> PagoParcial, (pagoParcial)=> pagoParcial.cliente)
    pagoPar: PagoParcial[];

    @OneToMany(()=> PagoTotal, (pagoTotal)=> pagoTotal.cliente)
    pagoTo: PagoParcial[];

}



