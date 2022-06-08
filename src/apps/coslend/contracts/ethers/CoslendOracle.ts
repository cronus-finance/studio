/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from 'ethers';
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export interface CoslendOracleInterface extends utils.Interface {
  functions: {
    'getUnderlyingPrice(address)': FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: 'getUnderlyingPrice'): FunctionFragment;

  encodeFunctionData(functionFragment: 'getUnderlyingPrice', values: [string]): string;

  decodeFunctionResult(functionFragment: 'getUnderlyingPrice', data: BytesLike): Result;

  events: {};
}

export interface CoslendOracle extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CoslendOracleInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getUnderlyingPrice(marketToken: string, overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  getUnderlyingPrice(marketToken: string, overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    getUnderlyingPrice(marketToken: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getUnderlyingPrice(marketToken: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getUnderlyingPrice(marketToken: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
