import {expect} from 'chai'
import sinon from 'sinon'
import jsdom from 'jsdom'
import nock from 'nock'

Object.assign(global, {
	expect,
	sinon,
	jsdom,
	nock
})
