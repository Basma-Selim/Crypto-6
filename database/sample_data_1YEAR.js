const lastYearData = [
	{
		time_period_start: '2019-10-14T00:00:00.0000000Z',
		time_period_end: '2019-10-21T00:00:00.0000000Z',
		time_open: '2019-10-18T00:00:08.0460000Z',
		time_close: '2019-10-20T23:59:42.2100000Z',
		price_open: 8069.26,
		price_high: 8314.77,
		price_low: 7811.62,
		price_close: 8235.74,
		volume_traded: 15194.81951093,
		trades_count: 62891,
	},
	{
		time_period_start: '2019-10-21T00:00:00.0000000Z',
		time_period_end: '2019-10-28T00:00:00.0000000Z',
		time_open: '2019-10-21T00:00:04.7280000Z',
		time_close: '2019-10-27T23:59:56.9900000Z',
		price_open: 8236.49,
		price_high: 10350,
		price_low: 7293.55,
		price_close: 9557.08,
		volume_traded: 95958.61641025,
		trades_count: 247761,
	},
	{
		time_period_start: '2019-10-28T00:00:00.0000000Z',
		time_period_end: '2019-11-04T00:00:00.0000000Z',
		time_open: '2019-10-28T00:00:04.5950000Z',
		time_close: '2019-11-03T23:59:44.8370000Z',
		price_open: 9547.32,
		price_high: 9922.96,
		price_low: 8970,
		price_close: 9207,
		volume_traded: 52636.96982856,
		trades_count: 185455,
	},
	{
		time_period_start: '2019-11-04T00:00:00.0000000Z',
		time_period_end: '2019-11-11T00:00:00.0000000Z',
		time_open: '2019-11-04T00:00:09.6800000Z',
		time_close: '2019-11-10T23:59:53.3230000Z',
		price_open: 9207,
		price_high: 9586.5,
		price_low: 8661,
		price_close: 9024.49,
		volume_traded: 38779.05895081,
		trades_count: 117326,
	},
	{
		time_period_start: '2019-11-11T00:00:00.0000000Z',
		time_period_end: '2019-11-18T00:00:00.0000000Z',
		time_open: '2019-11-11T00:00:06.8560000Z',
		time_close: '2019-11-17T23:59:51.7870000Z',
		price_open: 9029.88,
		price_high: 9075.32,
		price_low: 8363,
		price_close: 8499.31,
		volume_traded: 25962.6801065,
		trades_count: 92809,
	},
	{
		time_period_start: '2019-11-18T00:00:00.0000000Z',
		time_period_end: '2019-11-25T00:00:00.0000000Z',
		time_open: '2019-11-18T00:00:03.5200000Z',
		time_close: '2019-11-24T23:59:49.0110000Z',
		price_open: 8499.53,
		price_high: 8508.4,
		price_low: 6785,
		price_close: 6908.36,
		volume_traded: 50799.86626661,
		trades_count: 141587,
	},
	{
		time_period_start: '2019-11-25T00:00:00.0000000Z',
		time_period_end: '2019-12-02T00:00:00.0000000Z',
		time_open: '2019-11-25T00:00:03.5880000Z',
		time_close: '2019-12-01T23:59:48.2410000Z',
		price_open: 6900.9,
		price_high: 7870.35,
		price_low: 6515,
		price_close: 7412.66,
		volume_traded: 66362.77550082,
		trades_count: 138685,
	},
	{
		time_period_start: '2019-12-02T00:00:00.0000000Z',
		time_period_end: '2019-12-09T00:00:00.0000000Z',
		time_open: '2019-12-02T00:00:48.7820000Z',
		time_close: '2019-12-08T23:59:53.8340000Z',
		price_open: 7411.75,
		price_high: 7772.71,
		price_low: 7087.09,
		price_close: 7524.26,
		volume_traded: 27256.03290919,
		trades_count: 85606,
	},
	{
		time_period_start: '2019-12-09T00:00:00.0000000Z',
		time_period_end: '2019-12-16T00:00:00.0000000Z',
		time_open: '2019-12-09T00:00:17.2990000Z',
		time_close: '2019-12-15T23:59:59.8070000Z',
		price_open: 7516.8,
		price_high: 7666,
		price_low: 7007,
		price_close: 7115.08,
		volume_traded: 25450.35246009,
		trades_count: 72366,
	},
	{
		time_period_start: '2019-12-16T00:00:00.0000000Z',
		time_period_end: '2019-12-23T00:00:00.0000000Z',
		time_open: '2019-12-16T00:00:05.1200000Z',
		time_close: '2019-12-22T23:59:56.4010000Z',
		price_open: 7115.08,
		price_high: 7530,
		price_low: 6425,
		price_close: 7509.7,
		volume_traded: 40414.80208,
		trades_count: 111356,
	},
	{
		time_period_start: '2019-12-23T00:00:00.0000000Z',
		time_period_end: '2019-12-30T00:00:00.0000000Z',
		time_open: '2019-12-23T00:00:11.1920000Z',
		time_close: '2019-12-29T23:59:48.8850000Z',
		price_open: 7521.88,
		price_high: 7692.98,
		price_low: 7052,
		price_close: 7385.54,
		volume_traded: 23714.75676272,
		trades_count: 68679,
	},
	{
		time_period_start: '2019-12-30T00:00:00.0000000Z',
		time_period_end: '2020-01-06T00:00:00.0000000Z',
		time_open: '2019-12-30T00:00:50.7640000Z',
		time_close: '2020-01-05T23:59:36.5800000Z',
		price_open: 7372.79,
		price_high: 7495,
		price_low: 6853.53,
		price_close: 7356.7,
		volume_traded: 25408.14300534,
		trades_count: 78986,
	},
	{
		time_period_start: '2020-01-06T00:00:00.0000000Z',
		time_period_end: '2020-01-13T00:00:00.0000000Z',
		time_open: '2020-01-06T00:00:11.0720000Z',
		time_close: '2020-01-12T23:59:54.9220000Z',
		price_open: 7352.12,
		price_high: 8463.57,
		price_low: 7342.46,
		price_close: 8180.76,
		volume_traded: 51321.64424724,
		trades_count: 141232,
	},
	{
		time_period_start: '2020-01-13T00:00:00.0000000Z',
		time_period_end: '2020-01-20T00:00:00.0000000Z',
		time_open: '2020-01-13T00:00:07.3450000Z',
		time_close: '2020-01-19T23:59:49.4800000Z',
		price_open: 8180.75,
		price_high: 9188.1,
		price_low: 8039,
		price_close: 8696.6,
		volume_traded: 57534.48706102,
		trades_count: 162832,
	},
	{
		time_period_start: '2020-01-20T00:00:00.0000000Z',
		time_period_end: '2020-01-27T00:00:00.0000000Z',
		time_open: '2020-01-20T00:00:02.4570000Z',
		time_close: '2020-01-26T23:59:51.6260000Z',
		price_open: 8698.97,
		price_high: 8792.98,
		price_low: 8212.9,
		price_close: 8590.48,
		volume_traded: 34771.52029804,
		trades_count: 109254,
	},
	{
		time_period_start: '2020-01-27T00:00:00.0000000Z',
		time_period_end: '2020-02-03T00:00:00.0000000Z',
		time_open: '2020-01-27T00:00:03.7920000Z',
		time_close: '2020-02-02T23:59:55.0710000Z',
		price_open: 8600,
		price_high: 9570,
		price_low: 8546.55,
		price_close: 9329.39,
		volume_traded: 42453.3624723,
		trades_count: 125524,
	},
	{
		time_period_start: '2020-02-03T00:00:00.0000000Z',
		time_period_end: '2020-02-10T00:00:00.0000000Z',
		time_open: '2020-02-03T00:00:45.0460000Z',
		time_close: '2020-02-09T23:59:58.9660000Z',
		price_open: 9309.69,
		price_high: 10178.54,
		price_low: 9075,
		price_close: 10173.97,
		volume_traded: 35420.15638897,
		trades_count: 144796,
	},
	{
		time_period_start: '2020-02-10T00:00:00.0000000Z',
		time_period_end: '2020-02-17T00:00:00.0000000Z',
		time_open: '2020-02-10T00:00:17.4320000Z',
		time_close: '2020-02-16T23:59:56.5050000Z',
		price_open: 10173.51,
		price_high: 10500.5,
		price_low: 9598.49,
		price_close: 9912.89,
		volume_traded: 45974.69313963,
		trades_count: 167126,
	},
	{
		time_period_start: '2020-02-17T00:00:00.0000000Z',
		time_period_end: '2020-02-24T00:00:00.0000000Z',
		time_open: '2020-02-17T00:01:19.1230000Z',
		time_close: '2020-02-23T23:59:56.3730000Z',
		price_open: 9914.4,
		price_high: 10300,
		price_low: 9312,
		price_close: 9965.21,
		volume_traded: 37135.12095102,
		trades_count: 143337,
	},
	{
		time_period_start: '2020-02-24T00:00:00.0000000Z',
		time_period_end: '2020-03-02T00:00:00.0000000Z',
		time_open: '2020-02-24T00:00:04.4350000Z',
		time_close: '2020-03-01T23:59:58.2630000Z',
		price_open: 9969.79,
		price_high: 10027.66,
		price_low: 8410,
		price_close: 8528.95,
		volume_traded: 43643.62344019,
		trades_count: 146376,
	},
	{
		time_period_start: '2020-03-02T00:00:00.0000000Z',
		time_period_end: '2020-03-09T00:00:00.0000000Z',
		time_open: '2020-03-02T00:00:19.9670000Z',
		time_close: '2020-03-08T23:59:54.6640000Z',
		price_open: 8516,
		price_high: 9219.13,
		price_low: 7995.48,
		price_close: 8033.7,
		volume_traded: 35298.03035107,
		trades_count: 116496,
	},
	{
		time_period_start: '2020-03-09T00:00:00.0000000Z',
		time_period_end: '2020-03-16T00:00:00.0000000Z',
		time_open: '2020-03-09T00:00:07.0310000Z',
		time_close: '2020-03-15T23:59:52.5770000Z',
		price_open: 8035.79,
		price_high: 8191.13,
		price_low: 3850,
		price_close: 5343.64,
		volume_traded: 160079.39231666,
		trades_count: 308353,
	},
	{
		time_period_start: '2020-03-16T00:00:00.0000000Z',
		time_period_end: '2020-03-23T00:00:00.0000000Z',
		time_open: '2020-03-16T00:00:08.0410000Z',
		time_close: '2020-03-22T23:59:54.9210000Z',
		price_open: 5353.04,
		price_high: 7139,
		price_low: 4435.89,
		price_close: 5813.15,
		volume_traded: 149619.88963011,
		trades_count: 229725,
	},
	{
		time_period_start: '2020-03-23T00:00:00.0000000Z',
		time_period_end: '2020-03-30T00:00:00.0000000Z',
		time_open: '2020-03-23T00:00:05.4010000Z',
		time_close: '2020-03-29T23:59:53.7200000Z',
		price_open: 5816.57,
		price_high: 6989.04,
		price_low: 5686.34,
		price_close: 5870.9,
		volume_traded: 93542.61473918,
		trades_count: 161741,
	},
	{
		time_period_start: '2020-03-30T00:00:00.0000000Z',
		time_period_end: '2020-04-06T00:00:00.0000000Z',
		time_open: '2020-03-30T00:00:05.0340000Z',
		time_close: '2020-04-05T23:59:35.1450000Z',
		price_open: 5878.47,
		price_high: 7236.39,
		price_low: 5856,
		price_close: 6775.2,
		volume_traded: 70315.17666521,
		trades_count: 122554,
	},
	{
		time_period_start: '2020-04-06T00:00:00.0000000Z',
		time_period_end: '2020-04-13T00:00:00.0000000Z',
		time_open: '2020-04-06T00:00:40.0480000Z',
		time_close: '2020-04-12T23:59:57.2490000Z',
		price_open: 6780.57,
		price_high: 7469,
		price_low: 6750.15,
		price_close: 6908.24,
		volume_traded: 63238.9603633,
		trades_count: 108404,
	},
	{
		time_period_start: '2020-04-13T00:00:00.0000000Z',
		time_period_end: '2020-04-20T00:00:00.0000000Z',
		time_open: '2020-04-13T00:00:05.1580000Z',
		time_close: '2020-04-19T23:59:50.1940000Z',
		price_open: 6908.21,
		price_high: 7306.15,
		price_low: 6472.67,
		price_close: 7126.4,
		volume_traded: 60200.55813577,
		trades_count: 114849,
	},
	{
		time_period_start: '2020-04-20T00:00:00.0000000Z',
		time_period_end: '2020-04-27T00:00:00.0000000Z',
		time_open: '2020-04-20T00:00:07.1970000Z',
		time_close: '2020-04-26T23:59:47.2170000Z',
		price_open: 7124.27,
		price_high: 7756.69,
		price_low: 6757.75,
		price_close: 7701.73,
		volume_traded: 54394.39522182,
		trades_count: 100036,
	},
	{
		time_period_start: '2020-04-27T00:00:00.0000000Z',
		time_period_end: '2020-05-04T00:00:00.0000000Z',
		time_open: '2020-04-27T00:00:01.5880000Z',
		time_close: '2020-05-03T23:59:27.7780000Z',
		price_open: 7708.87,
		price_high: 9485.26,
		price_low: 7637.03,
		price_close: 8915.98,
		volume_traded: 90703.04271615,
		trades_count: 157657,
	},
	{
		time_period_start: '2020-05-04T00:00:00.0000000Z',
		time_period_end: '2020-05-11T00:00:00.0000000Z',
		time_open: '2020-05-04T00:00:22.0010000Z',
		time_close: '2020-05-10T23:59:56.4670000Z',
		price_open: 8924.14,
		price_high: 10074,
		price_low: 8109,
		price_close: 8731.17,
		volume_traded: 121856.4978396,
		trades_count: 211766,
	},
	{
		time_period_start: '2020-05-11T00:00:00.0000000Z',
		time_period_end: '2020-05-18T00:00:00.0000000Z',
		time_open: '2020-05-11T00:00:25.2370000Z',
		time_close: '2020-05-17T23:59:13.3060000Z',
		price_open: 8740.88,
		price_high: 9945.34,
		price_low: 8181,
		price_close: 9665.7,
		volume_traded: 114184.51912903,
		trades_count: 269711,
	},
	{
		time_period_start: '2020-05-18T00:00:00.0000000Z',
		time_period_end: '2020-05-25T00:00:00.0000000Z',
		time_open: '2020-05-18T00:00:02.5840000Z',
		time_close: '2020-05-24T23:59:59.9310000Z',
		price_open: 9672.95,
		price_high: 9966.12,
		price_low: 8669,
		price_close: 8718.77,
		volume_traded: 73313.63663781,
		trades_count: 213373,
	},
	{
		time_period_start: '2020-05-25T00:00:00.0000000Z',
		time_period_end: '2020-06-01T00:00:00.0000000Z',
		time_open: '2020-05-25T00:00:00.2490000Z',
		time_close: '2020-05-31T23:59:58.5350000Z',
		price_open: 8710.12,
		price_high: 9758.27,
		price_low: 8630,
		price_close: 9446.19,
		volume_traded: 52940.62318662,
		trades_count: 156651,
	},
	{
		time_period_start: '2020-06-01T00:00:00.0000000Z',
		time_period_end: '2020-06-08T00:00:00.0000000Z',
		time_open: '2020-06-01T00:00:00.2190000Z',
		time_close: '2020-06-07T23:59:39.3430000Z',
		price_open: 9444.61,
		price_high: 10429.26,
		price_low: 9135.68,
		price_close: 9750.04,
		volume_traded: 68669.0848275,
		trades_count: 170881,
	},
	{
		time_period_start: '2020-06-08T00:00:00.0000000Z',
		time_period_end: '2020-06-15T00:00:00.0000000Z',
		time_open: '2020-06-08T00:00:08.0870000Z',
		time_close: '2020-06-14T23:59:53.5640000Z',
		price_open: 9759.04,
		price_high: 10011.4,
		price_low: 9078.91,
		price_close: 9329.99,
		volume_traded: 49148.59177276,
		trades_count: 133522,
	},
	{
		time_period_start: '2020-06-15T00:00:00.0000000Z',
		time_period_end: '2020-06-22T00:00:00.0000000Z',
		time_open: '2020-06-15T00:00:02.1020000Z',
		time_close: '2020-06-21T23:58:16.4840000Z',
		price_open: 9329.99,
		price_high: 9596.31,
		price_low: 8900,
		price_close: 9283.03,
		volume_traded: 38341.62442907,
		trades_count: 103601,
	},
	{
		time_period_start: '2020-06-22T00:00:00.0000000Z',
		time_period_end: '2020-06-29T00:00:00.0000000Z',
		time_open: '2020-06-22T00:00:05.7140000Z',
		time_close: '2020-06-28T23:59:57.9310000Z',
		price_open: 9287.89,
		price_high: 9798.76,
		price_low: 8830.63,
		price_close: 9118.01,
		volume_traded: 45799.49876681,
		trades_count: 120807,
	},
	{
		time_period_start: '2020-06-29T00:00:00.0000000Z',
		time_period_end: '2020-07-06T00:00:00.0000000Z',
		time_open: '2020-06-29T00:00:03.8550000Z',
		time_close: '2020-07-05T23:59:58.3360000Z',
		price_open: 9118.8,
		price_high: 9300,
		price_low: 8905,
		price_close: 9076.82,
		volume_traded: 27663.87552175,
		trades_count: 87009,
	},
	{
		time_period_start: '2020-07-06T00:00:00.0000000Z',
		time_period_end: '2020-07-13T00:00:00.0000000Z',
		time_open: '2020-07-06T00:00:00.6430000Z',
		time_close: '2020-07-12T23:59:57.5690000Z',
		price_open: 9077.18,
		price_high: 9479.57,
		price_low: 9053.14,
		price_close: 9306.17,
		volume_traded: 28315.81948601,
		trades_count: 92086,
	},
	{
		time_period_start: '2020-07-13T00:00:00.0000000Z',
		time_period_end: '2020-07-20T00:00:00.0000000Z',
		time_open: '2020-07-13T00:00:06.0160000Z',
		time_close: '2020-07-19T23:59:03.0300000Z',
		price_open: 9304.94,
		price_high: 9351.17,
		price_low: 9026.51,
		price_close: 9211.99,
		volume_traded: 24244.16771897,
		trades_count: 83106,
	},
	{
		time_period_start: '2020-07-20T00:00:00.0000000Z',
		time_period_end: '2020-07-27T00:00:00.0000000Z',
		time_open: '2020-07-20T00:00:01.1450000Z',
		time_close: '2020-07-26T23:59:50.3340000Z',
		price_open: 9213.15,
		price_high: 10200,
		price_low: 9128.21,
		price_close: 9944.65,
		volume_traded: 46727.55746877,
		trades_count: 147159,
	},
	{
		time_period_start: '2020-07-27T00:00:00.0000000Z',
		time_period_end: '2020-08-03T00:00:00.0000000Z',
		time_open: '2020-07-27T00:01:02.8460000Z',
		time_close: '2020-08-02T23:59:58.2280000Z',
		price_open: 9941.25,
		price_high: 12100,
		price_low: 9933.77,
		price_close: 11071.66,
		volume_traded: 101978.64311276,
		trades_count: 256429,
	},
	{
		time_period_start: '2020-08-03T00:00:00.0000000Z',
		time_period_end: '2020-08-10T00:00:00.0000000Z',
		time_open: '2020-08-03T00:00:10.0640000Z',
		time_close: '2020-08-09T23:59:56.7750000Z',
		price_open: 11074.92,
		price_high: 11920,
		price_low: 10933.26,
		price_close: 11683.03,
		volume_traded: 47010.69808139,
		trades_count: 169303,
	},
	{
		time_period_start: '2020-08-10T00:00:00.0000000Z',
		time_period_end: '2020-08-17T00:00:00.0000000Z',
		time_open: '2020-08-10T00:00:27.3200000Z',
		time_close: '2020-08-16T23:59:44.9820000Z',
		price_open: 11684.6,
		price_high: 12080,
		price_low: 11130,
		price_close: 11914.02,
		volume_traded: 42587.43796531,
		trades_count: 179285,
	},
	{
		time_period_start: '2020-08-17T00:00:00.0000000Z',
		time_period_end: '2020-08-24T00:00:00.0000000Z',
		time_open: '2020-08-17T00:00:06.5600000Z',
		time_close: '2020-08-23T23:59:41.6250000Z',
		price_open: 11916.83,
		price_high: 12473,
		price_low: 11367,
		price_close: 11644.65,
		volume_traded: 43615.2480828,
		trades_count: 178974,
	},
	{
		time_period_start: '2020-08-24T00:00:00.0000000Z',
		time_period_end: '2020-08-31T00:00:00.0000000Z',
		time_open: '2020-08-24T00:00:15.4500000Z',
		time_close: '2020-08-30T23:59:58.4140000Z',
		price_open: 11653.7,
		price_high: 11832.55,
		price_low: 11112.75,
		price_close: 11708.97,
		volume_traded: 32501.07818002,
		trades_count: 117235,
	},
	{
		time_period_start: '2020-08-31T00:00:00.0000000Z',
		time_period_end: '2020-09-07T00:00:00.0000000Z',
		time_open: '2020-08-31T00:00:14.6490000Z',
		time_close: '2020-09-06T23:59:52.6430000Z',
		price_open: 11713.11,
		price_high: 12065.82,
		price_low: 9850,
		price_close: 10260.17,
		volume_traded: 78807.92951866,
		trades_count: 226339,
	},
	{
		time_period_start: '2020-09-07T00:00:00.0000000Z',
		time_period_end: '2020-09-14T00:00:00.0000000Z',
		time_open: '2020-09-07T00:00:02.8120000Z',
		time_close: '2020-09-13T23:59:51.5360000Z',
		price_open: 10258.43,
		price_high: 10576.78,
		price_low: 9825.07,
		price_close: 10334.78,
		volume_traded: 47461.46527966,
		trades_count: 148530,
	},
	{
		time_period_start: '2020-09-14T00:00:00.0000000Z',
		time_period_end: '2020-09-21T00:00:00.0000000Z',
		time_open: '2020-09-14T00:00:16.0940000Z',
		time_close: '2020-09-20T23:59:46.0930000Z',
		price_open: 10338.82,
		price_high: 11183.01,
		price_low: 10250.13,
		price_close: 10923.5,
		volume_traded: 37510.14607747,
		trades_count: 137319,
	},
	{
		time_period_start: '2020-09-21T00:00:00.0000000Z',
		time_period_end: '2020-09-28T00:00:00.0000000Z',
		time_open: '2020-09-21T00:00:13.2630000Z',
		time_close: '2020-09-27T23:59:01.2450000Z',
		price_open: 10921.53,
		price_high: 10996.98,
		price_low: 10138.3,
		price_close: 10780.66,
		volume_traded: 38346.43438162,
		trades_count: 117734,
	},
	{
		time_period_start: '2020-09-28T00:00:00.0000000Z',
		time_period_end: '2020-10-05T00:00:00.0000000Z',
		time_open: '2020-09-28T00:00:01.9410000Z',
		time_close: '2020-10-04T23:59:52.3360000Z',
		price_open: 10779.99,
		price_high: 10950,
		price_low: 10380,
		price_close: 10669.63,
		volume_traded: 32564.50408512,
		trades_count: 115804,
	},
	{
		time_period_start: '2020-10-05T00:00:00.0000000Z',
		time_period_end: '2020-10-12T00:00:00.0000000Z',
		time_open: '2020-10-05T00:00:07.3060000Z',
		time_close: '2020-10-11T23:59:53.1390000Z',
		price_open: 10666.16,
		price_high: 11496.06,
		price_low: 10525,
		price_close: 11372.93,
		volume_traded: 31799.13471655,
		trades_count: 111823,
	},
	{
		time_period_start: '2020-10-12T00:00:00.0000000Z',
		time_period_end: '2020-10-19T00:00:00.0000000Z',
		time_open: '2020-10-12T00:00:09.4720000Z',
		time_close: '2020-10-16T15:18:00.8870000Z',
		price_open: 11372.48,
		price_high: 11731.7,
		price_low: 11175.99,
		price_close: 11322.4,
		volume_traded: 23818.61663895,
		trades_count: 79615,
	},
];
export default lastYearData;
